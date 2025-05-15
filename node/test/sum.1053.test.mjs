
import sum1053 from '../sum1053.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 65 to equal 104 + offset 0.8437422605743634', (t) => {
  assert.strictEqual(sum1053(39, 65), 104 + 0.8437422605743634);
});
