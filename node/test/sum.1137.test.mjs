
import sum1137 from '../sum1137.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 65 to equal 135 + offset 0.03144575484835732', (t) => {
  assert.strictEqual(sum1137(70, 65), 135 + 0.03144575484835732);
});
