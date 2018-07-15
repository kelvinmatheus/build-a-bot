// This code is applied to the bind and update lifecycle hook
export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });

  element.style.position = 'absolute';
}

// function applyStyle(element, binding) {
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });
//
//   element.style.position = 'absolute';
// }
//
// export default {
//   bind: (element, binding) => {
//     applyStyle(element, binding);
//
//   },
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },
// }
