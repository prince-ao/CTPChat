function getSchool(domain: string) {
  if (domain.includes("csi.cuny.edu")) {
    return "CUNY College of Staten Island";
  } else if (domain.includes("jjay.cuny.edu")) {
    return "CUNY John Jay";
  } else if (
    domain.includes("myhunter.cuny.edu") ||
    domain.includes("hunter.cuny.edu")
  ) {
    return "CUNY Hunter";
  } else {
    return "Unknown";
  }
}
