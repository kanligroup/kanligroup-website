#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate all 40 Kan Li publication markdown files from the authoritative Google Scholar list."""
import os, glob

OUT = "/Users/yuan/WorkBuddy/GroupWebsite/src/src/content/publications"
os.makedirs(OUT, exist_ok=True)

# Clear existing publication markdown files
for f in glob.glob(os.path.join(OUT, "*.md")):
    os.remove(f)
    print("removed", os.path.basename(f))

pubs = [
    dict(slug="wing-tilt-angle-2025",
         title="Effect of Wing Tilt Angle on Free-fall Dynamics of Chiral 3D Microfliers",
         authors="Y Liu, K Li*",
         venue="Mathematics and Mechanics of Complex Systems", year=2025,
         tags=["micro-flyer"]),

    dict(slug="flexible-ceramic-fibers-review-2025",
         title="Advancements in Flexible Ceramic Fibers for High-Temperature Applications: A Comprehensive Review",
         authors="Z Xu, Y Lyu, C Hou, Y Han, Y Bai, YA Huang, K Li",
         venue="High-Temperature Materials", year=2025,
         doi="10.70322/htm.2025.10007", tags=["high-temperature", "review"]),

    dict(slug="morphable-3d-shear-2025",
         title="Morphable 3D Architectures Enabled by Shear-Guided Approach",
         authors="K Li, Z Liu, X Hu, Z Xu, Y Zhou, L Chen, Y Huang, R Bo, Y Zhang",
         venue="Materials Today", year=2025,
         url="https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=5033233",
         tags=["3D-assembly"]),

    dict(slug="crack-strain-sensor-2024",
         title="Flexible Strain Sensors with Ultra-High Sensitivity and Wide Range Enabled by Crack-Modulated Electrical Pathways",
         authors="Y Bai, Y Zhou, X Wu, M Yin, L Yin, S Qu, F Zhang, K Li*, YA Huang*",
         venue="Nano-Micro Letters", year=2024,
         doi="10.1007/s40820-024-01571-6", highlight=True,
         tags=["strain-sensor", "crack-engineering"]),

    dict(slug="marangoni-tactile-2024",
         title="Marangoni-driven deterministic formation of softer, hollow microstructures for sensitivity-enhanced tactile system",
         authors="W Xiong, F Zhang, S Qu, L Yin, K Li, YA Huang",
         venue="Nature Communications", year=2024,
         doi="10.1038/s41467-024-49864-z", tags=["tactile", "soft-material"]),

    dict(slug="conformal-aircraft-2024",
         title="Design criteria for conformal integration of flexible electronics on advanced aircraft surfaces",
         authors="B Wang, B Zhang, X Wu, Y Zhou, L Xiao, S Jiang, K Li*, YA Huang*",
         venue="International Journal of Mechanical Sciences", year=2024,
         doi="10.1016/j.ijmecsci.2024.109448", tags=["conformal", "aircraft"]),

    dict(slug="fibre-stretchable-electrodes-review-2024",
         title="Fibre-based stretchable electrodes for flexible metamaterial electronics: A review",
         authors="Y Bai, C Hou, W Cheng, Z Xu, K Li*, YA Huang*",
         venue="Programmable Materials", year=2024,
         doi="10.1017/pma.2024.3", tags=["metamaterial", "review"]),

    dict(slug="laser-graphitization-2024",
         title="Laser-guided, self-confined graphitization for high-conductivity embedded electronics",
         authors="H Yu, J Bian, F Chen, K Li, YA Huang",
         venue="Research", year=2024,
         doi="10.34133/research.0305", tags=["laser", "conductive"]),

    dict(slug="pentamode-compression-shear-2023",
         title="Ultrahigh compression-shear ratio of sandwich pentamode metamaterials",
         authors="D Guo, S Jiang, Y Zhou, L Zhang, K Li, B Song, YA Huang",
         venue="Composite Structures", year=2023,
         doi="10.1016/j.compstruct.2023.117331", tags=["metamaterial", "pentamode"]),

    dict(slug="rise-flexible-hightemp-2023",
         title="Rise of flexible high-temperature electronics",
         authors="YL Zhou, WN Cheng, YZ Bai, C Hou, K Li, YA Huang",
         venue="Rare Metals", year=2023,
         doi="10.1007/s12598-023-02298-w", tags=["high-temperature", "review"]),

    dict(slug="recrystallization-laser-liftoff-2023",
         title="Recrystallization-Induced Laser Lift-Off Strategy for Flexible Thermal Sensors with Near-Limit Sensitivity",
         authors="D Guo, J Ling, Y Huang, W Xiong, Y Xu, Y Bai, K Li, F Zhang, YA Huang",
         venue="Advanced Materials Technologies", year=2023,
         doi="10.1002/admt.202301444", tags=["thermal-sensor", "laser"]),

    dict(slug="response-fabric-strain-2023",
         title="Response Regulation for Epidermal Fabric Strain Sensors via Mechanical Strategy",
         authors="Y Bai, L Yin, C Hou, Y Zhou, F Zhang, Z Xu, K Li*, YA Huang*",
         venue="Advanced Functional Materials", year=2023,
         doi="10.1002/adfm.202214119", tags=["strain-sensor", "fabric"]),

    dict(slug="electropolishing-3dprinting-2022",
         title="Electropolishing-enhanced, high-precision 3D printing of metallic pentamode metamaterials",
         authors="S Jiang, D Guo, L Zhang, K Li, B Song, YA Huang",
         venue="Materials & Design", year=2022,
         doi="10.1016/j.matdes.2022.111211", tags=["3D-printing", "pentamode"]),

    dict(slug="inplane-honeycomb-2022",
         title="The in-plane, elastic-plastic response of a filled hexagonal honeycomb at finite strain",
         authors="J Carlsson, K Li, VS Deshpande, NA Fleck",
         venue="Journal of the Mechanics and Physics of Solids", year=2022,
         doi="10.1016/j.jmps.2022.105047", tags=["lattice", "mechanics"]),

    dict(slug="crack-engineering-2022",
         title="Crack engineering boosts the performance of flexible sensors",
         authors="Y Zhou, H Lian, Z Li, L Yin, Q Ji, K Li, F Qi, YA Huang",
         venue="View", year=2022,
         doi="10.1002/viw.20220025", tags=["crack-engineering", "sensor"]),

    dict(slug="snakeskin-kirigami-2022",
         title="Snakeskin-inspired, Soft-Hinge Kirigami Metamaterial for Self-adaptive Conformal Electronic Armor",
         authors="S Jiang, J Liu, W Xiong, Z Yang, L Yin, K Li*, YA Huang*",
         venue="Advanced Materials", year=2022,
         doi="10.1002/adma.202204091", tags=["kirigami", "metamaterial"]),

    dict(slug="island-effect-stretchable-2022",
         title="Island effect in stretchable inorganic electronics",
         authors="K Li, Y Shuai, X Cheng, H Luan, S Liu, C Yang, Z Xue, Y Huang, Y Zhang",
         venue="Small", year=2022,
         doi="10.1002/smll.202107879", tags=["stretchable", "island"]),

    dict(slug="self-healing-kirigami-2022",
         title="Self-healing kirigami assembly strategy for conformal electronics",
         authors="J Liu, S Jiang, W Xiong, C Zhu, K Li, YA Huang",
         venue="Advanced Functional Materials", year=2022,
         doi="10.1002/adfm.202109214", tags=["kirigami", "self-healing"]),

    dict(slug="flexible-metamaterial-electronics-2022",
         title="Flexible Metamaterial Electronics",
         authors="S Jiang, X Liu, J Liu, D Ye, Y Duan, K Li, Z Yin, YA Huang",
         venue="Advanced Materials", year=2022,
         doi="10.1002/adma.202200070", tags=["metamaterial", "flexible"]),

    dict(slug="bio-inspired-sensing-skin-2021",
         title="Bio-inspired, intelligent flexible sensing skin for multifunctional flying perception",
         authors="W Xiong, C Zhu, D Guo, C Hou, Z Yang, Z Xu, L Qiu, H Yang, K Li, YA Huang",
         venue="Nano Energy", year=2021,
         doi="10.1016/j.nanoen.2021.106550", tags=["sensing-skin", "micro-flyer"]),

    dict(slug="complex-3d-microfluidic-2021",
         title="Complex 3D microfluidic architectures formed by mechanically guided compressive buckling",
         authors="H Wang, S Yao, Y Xue, JW Kwak, W Bai, Y Xu, M Han, K Li, Z Li, X Ni, J Ye, D Choi, Q Yang, JH Kim, S Li et al.",
         venue="Science Advances", year=2021,
         doi="10.1126/sciadv.abj3686", tags=["3D-assembly", "microfluidic"]),

    dict(slug="microflyer-nature-2021",
         title="Three-dimensional electronic microfliers inspired by wind-dispersed seeds",
         authors="BH Kim, K Li, JT Kim, Y Park, H Jang, X Wang, Z Xie, SM Won, HJ Yoon, G Lee, WJ Jang, KH Lee et al.",
         venue="Nature", year=2021,
         doi="10.1038/s41586-021-03847-y", highlight=True, cover=True,
         tags=["micro-flyer", "3D-assembly", "Nature-cover"]),

    dict(slug="neural-interfaces-2021",
         title="Three-dimensional, multifunctional neural interfaces for cortical spheroids and engineered assembloids",
         authors="Y Park, CK Franz, H Ryu, H Luan, KY Cotton, JU Kim, TS Chung, S Zhao, A Vazquez-Guardado, DS Yang, K Li et al.",
         venue="Science Advances", year=2021,
         doi="10.1126/sciadv.abf9153", tags=["neural", "3D-assembly"]),

    dict(slug="biocompatible-light-guide-2021",
         title="Biocompatible Light Guide-Assisted Wearable Devices for Enhanced UV Light Delivery in Deep Skin",
         authors="H Zhang, H Zhao, X Zhao, C Xu, D Franklin, A Vazquez-Guardado, W Bai, J Zhao, K Li, G Monti, W Lu et al.",
         venue="Advanced Functional Materials", year=2021,
         doi="10.1002/adfm.202100576", tags=["wearable", "UV"]),

    dict(slug="strut-waviness-2021",
         title="The influence of strut waviness on the tensile response of lattice materials",
         authors="PE Seiler, K Li, VS Deshpande, NA Fleck",
         venue="Journal of Applied Mechanics", year=2021,
         doi="10.1115/1.4049727", tags=["lattice", "mechanics"]),

    dict(slug="notch-sensitivity-lattice-2021",
         title="Regulation of notch sensitivity of lattice materials by strut topology",
         authors="K Li, PE Seiler, VS Deshpande, NA Fleck",
         venue="International Journal of Mechanical Sciences", year=2021,
         doi="10.1016/j.ijmecsci.2020.106137", tags=["lattice", "mechanics"]),

    dict(slug="catheter-cardiac-2020",
         title="Catheter-integrated soft multilayer electronic arrays for multiplexed sensing and actuation during cardiac surgery",
         authors="M Han, L Chen, K Aras, C Liang, X Chen, H Zhao, K Li, NR Faye, B Sun, JH Kim, W Bai, Q Yang, Y Ma, W Lu et al.",
         venue="Nature Biomedical Engineering", year=2020,
         doi="10.1038/s41551-020-00604-w", highlight=True,
         tags=["catheter", "soft-electronics"]),

    dict(slug="bioresorbable-drug-delivery-2020",
         title="Wirelessly controlled, bioresorbable drug delivery device with active valves that exploit electrochemically triggered crevice corrosion",
         authors="J Khalifeh, Y Yan, H Kim, MK Pezhouh, K Doty, G Lee, YY Chen, SM Lee, D D'Andrea, K Jung, KH Lee, K Li et al.",
         venue="Science Advances", year=2020,
         doi="10.1126/sciadv.abb1093", tags=["bioresorbable", "drug-delivery"]),

    dict(slug="remotely-triggered-shapememory-2019",
         title="Remotely triggered assembly of 3D mesostructures through shape-memory effects",
         authors="JK Park, K Nan, H Luan, N Zheng, S Zhao, H Zhang, X Cheng, H Wang, K Li, T Xie, Y Huang, Y Zhang, S Kim et al.",
         venue="Advanced Materials", year=2019,
         doi="10.1002/adma.201905715", tags=["3D-assembly", "shape-memory"]),

    dict(slug="strain-isolation-bridge-2019",
         title="Strain-Isolation Bridge Structure to Improve Stretchability of Highly Sensitive Strain Sensors",
         authors="Y Liu, H Fan, K Li, N Zhao, S Chen, Y Ma, X Ouyang, X Wang",
         venue="Advanced Materials Technologies", year=2019,
         url="https://www.researchgate.net/profile/Yangchengyi-Liu/publication/334264221_Strain-Isolation_Bridge_Structure_to_Improve_Stretchability_of_Highly_Sensitive_Strain_Sensors/links/5e0d8132a6fdcc28374ff553/Strain-Isolation-Bridge-Structure-to-Improve-Stretchability-of-Highly-Sensitive-Strain-Sensors.pdf",
         tags=["strain-sensor", "stretchable"]),

    dict(slug="buckling-twisting-pnas-2019",
         title="Buckling and twisting of advanced materials into morphable 3D mesostructures",
         authors="H Zhao, K Li, M Han, F Zhu, A Vazquez-Guardado, P Guo, Z Xie, Y Park, L Chen, X Wang, H Luan, Y Yang et al.",
         venue="Proceedings of the National Academy of Sciences", year=2019,
         doi="10.1073/pnas.1901193116", highlight=True,
         tags=["3D-assembly", "buckling"]),

    dict(slug="generic-soft-encapsulation-2019",
         title="A Generic Soft Encapsulation Strategy for Stretchable Electronics",
         authors="K Li, X Cheng, F Zhu, L Li, Z Xie, H Luan, Z Wang, Z Ji, H Wang, F Liu, Y Xue, C Jiang, X Feng, L Li et al.",
         venue="Advanced Functional Materials", year=2019,
         doi="10.1002/adfm.201806630", highlight=True,
         tags=["encapsulation", "stretchable"]),

    dict(slug="heterogeneous-deformable-substrates-2018",
         title="Design and fabrication of heterogeneous, deformable substrates for the mechanically guided 3D assembly",
         authors="H Luan, X Cheng, A Wang, S Zhao, K Bai, H Wang, W Pang, Z Xie, K Li, F Zhang, Y Xue, Y Huang, Y Zhang",
         venue="ACS Applied Materials & Interfaces", year=2018,
         doi="10.1021/acsami.7b16458", tags=["3D-assembly", "substrate"]),

    dict(slug="thermoelectric-coils-2018",
         title="Compliant and stretchable thermoelectric coils for energy harvesting in miniature flexible devices",
         authors="K Nan, SD Kang, K Li, KJ Yu, F Zhu, J Wang, AC Dunn, C Zhou, Z Xie, MT Agne, H Wang, H Luan, Y Zhang et al.",
         venue="Science Advances", year=2018,
         doi="10.1126/sciadv.eaau5849", url="https://www.science.org/doi/full/10.1126/sciadv.eaau5849", tags=["thermoelectric", "energy-harvesting"]),

    dict(slug="mechanically-guided-postassembly-2018",
         title="Mechanically guided post-assembly of 3D electronic systems",
         authors="BH Kim, F Liu, Y Yu, H Jang, Z Xie, K Li, J Lee, JY Jeong, A Ryu, Y Lee, DH Kim, X Wang, KH Lee, JY Lee et al.",
         venue="Advanced Functional Materials", year=2018,
         doi="10.1002/adfm.201803149", tags=["3D-assembly"]),

    dict(slug="battery-free-wireless-2018",
         title="Battery-free, wireless sensors for full-body pressure and temperature mapping",
         authors="Y Ma, D Kang, Z Xie, KT Lee, HU Chung, A Banks, S Min, SY Heo, CR Davies, JW Lee, CH Lee, BH Kim, K Li et al.",
         venue="Science Translational Medicine", year=2018,
         doi="10.1126/scitranslmed.aan4950", highlight=True,
         tags=["wireless", "wearable"]),

    dict(slug="cardiac-biosensors-npj-2018",
         title="Highly flexible, wearable, and disposable cardiac biosensors for remote and ambulatory monitoring",
         authors="DE Wright, Y Ma, E Sen-Gupta, NR Haubrich, PC Branche, W Li, GL Huppert, M Johnson, HB Mutlu, K Li et al.",
         venue="NPJ Digital Medicine", year=2018,
         doi="10.1038/s41746-017-0009-x", tags=["biosensor", "wearable"]),

    dict(slug="self-assembled-3d-network-2017",
         title="Self-assembled three dimensional network designs for soft electronics",
         authors="KI Jang, K Li, HU Chung, S Xu, HN Jung, Y Yang, JW Kwak, HH Jung, J Song, C Yang, A Wang, Z Liu et al.",
         venue="Nature Communications", year=2017,
         doi="10.1038/ncomms15894", highlight=True,
         tags=["soft-electronics", "3D-network"]),

    dict(slug="engineered-elastomer-substrates-2017",
         title="Engineered elastomer substrates for guided assembly of complex 3D mesostructures by spatially nonuniform compressive buckling",
         authors="K Nan, H Luan, Z Yan, X Ning, Y Wang, A Wang, J Wang, M Han, M Chang, K Li, Y Zhang, W Huang, Y Xue et al.",
         venue="Advanced Functional Materials", year=2017,
         doi="10.1002/adfm.201604281", tags=["3D-assembly", "elastomer"]),

    dict(slug="epidermal-nfc-2015",
         title="Epidermal electronics with advanced capabilities in near-field communication",
         authors="J Kim, A Banks, H Cheng, Z Xie, S Xu, KI Jang, JW Lee, Z Liu, P Gutruf, X Huang, P Wei, F Liu, K Li, M Dalal et al.",
         venue="Small", year=2015,
         url="https://www.academia.edu/download/40280683/Stretchable_Electronics_Epidermal_Electr20151122-29221-dz3uvn.pdf", tags=["epidermal", "NFC"]),
]

def q(s):
    return '"' + s.replace('"', '\\"') + '"'

for p in pubs:
    lines = ["---"]
    lines.append("title: " + q(p["title"]))
    lines.append("authors: " + q(p["authors"]))
    lines.append("venue: " + q(p["venue"]))
    lines.append("year: " + str(p["year"]))
    if p.get("doi"):
        lines.append("doi: " + q(p["doi"]))
    if p.get("url"):
        lines.append("url: " + q(p["url"]))
    if p.get("highlight"):
        lines.append("highlight: true")
    if p.get("cover"):
        lines.append("cover: true")
    if p.get("tags"):
        lines.append("tags: [" + ", ".join(p["tags"]) + "]")
    lines.append("---")
    lines.append("")
    body = p["title"] + "."
    lines.append(body)
    content = "\n".join(lines) + "\n"
    with open(os.path.join(OUT, p["slug"] + ".md"), "w", encoding="utf-8") as fh:
        fh.write(content)
    print("wrote", p["slug"])

print("TOTAL:", len(pubs))
