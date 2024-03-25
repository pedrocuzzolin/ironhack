const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ipsum vel neque aliquet maximus. Morbi eget mauris et libero tincidunt feugiat vel eget felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras luctus neque vitae lacus tincidunt, vitae venenatis lectus porta. Nam vulputate, felis eget iaculis maximus, justo orci molestie nibh, sit amet volutpat nulla erat vitae magna. Pellentesque blandit, lorem sed placerat hendrerit, tellus orci malesuada leo, a commodo ante enim sit amet libero. Donec accumsan cursus nibh, ut dapibus lorem fringilla eu. Sed ut aliquet lectus. In sit amet dignissim massa. In hac habitasse platea dictumst. Suspendisse est risus, dapibus id euismod in, fermentum porttitor justo. Aliquam elit urna, scelerisque eu scelerisque non, eleifend id turpis. Pellentesque et lacus eget nulla pretium ultrices nec porttitor tortor.

Nullam non lobortis ipsum. Aenean ac nisi interdum, viverra ligula id, imperdiet odio. Mauris fringilla at metus vel gravida. In condimentum ornare ligula, sed rutrum sapien vulputate id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non bibendum urna, eu scelerisque eros. Morbi sodales risus lacus, id imperdiet lectus posuere quis. Aenean dapibus leo metus. Sed vulputate quam et accumsan lacinia. Nam aliquet pretium tincidunt. In eu urna cursus, pretium risus nec, dictum nunc. Nulla auctor at libero at sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam quis accumsan augue, et pellentesque arcu.

Sed nec est magna. Nullam sagittis dignissim hendrerit. Nam vel tincidunt mi, at elementum magna. Quisque ipsum enim, posuere vitae lacus vel, sodales congue diam. Pellentesque eu consectetur urna. Proin a odio euismod, dictum dui in, pharetra nunc. Integer feugiat tincidunt purus ac viverra. Quisque enim nibh, maximus id lacinia sit amet, pharetra vitae eros. Suspendisse vel porta urna. Maecenas at lacus vitae eros dictum vehicula sed quis odio. Maecenas id vulputate elit.`;

const textArray = longText.split(" ");
console.log(textArray);

const words = longText.split(/\s+/);

// Count the occurrences of the word "et"
let etCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "et") {
        etCount++;
    }
}

console.log(`The Latin word "et" appears ${etCount} times.`);

