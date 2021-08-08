const dna = (sequence) => {
  const map = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return sequence.replace(/./g, (match) => {
    return map[match];
  });
};

console.log(dna("AATCG"));
