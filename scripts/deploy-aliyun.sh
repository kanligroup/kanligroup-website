#!/usr/bin/env bash
# 部署 kanligroup.com 到阿里云 OSS + CDN（替代 GitHub Pages，解决微信访问 + 国内速度）
#
# 前置准备：
#   1. 安装 ossutil：https://help.aliyun.com/zh/oss/developer-reference/ossutil-overview
#      配置：ossutil config  （填 AccessKeyId / AccessKeySecret / Endpoint）
#   2. 已在阿里云 OSS 创建 Bucket 并开启「静态页面」托管（默认首页 index.html，404 页 index.html）
#   3. 已在 CDN 绑定 kanligroup.com（及 www），开启 HTTPS 并申请免费证书
#   4. 已完成 ICP 备案（见下方手册），否则国内/微信仍打不开
#
# 用法（环境变量覆盖默认值）：
#   BUCKET=kanligroup-website OSS_ENDPOINT=oss-cn-hangzhou.aliyuncs.com \
#     ./scripts/deploy-aliyun.sh
#
set -euo pipefail

BUCKET="${BUCKET:-kanligroup-website}"            # ← 改成你的 OSS bucket 名
OSS_ENDPOINT="${OSS_ENDPOINT:-oss-cn-hangzhou.aliyuncs.com}"
CDN_DOMAINS="${CDN_DOMAINS:-kanligroup.com,www.kanligroup.com}"  # 用于刷新缓存
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/src"

echo "==> 1/3 构建 Astro 站点"
cd "$SRC"
npm ci
npm run build

echo "==> 2/3 上传 dist/ 到 OSS: $BUCKET"
ossutil cp -r -f dist/ "oss://$BUCKET/" --update

echo "==> 3/3 刷新 CDN 缓存（可选）"
if command -v aliyun >/dev/null 2>&1; then
  aliyun cdn RefreshObjectCaches --ObjectPath "$CDN_DOMAINS" --ObjectType File \
    && echo "CDN 刷新已提交" || echo "CDN 刷新失败（可忽略，首次会自动回源）"
else
  echo "（未安装 aliyun CLI，跳过 CDN 刷新；首次访问会自动回源，无需刷新）"
fi

echo "==> 完成 ✅  访问 https://kanligroup.com"
