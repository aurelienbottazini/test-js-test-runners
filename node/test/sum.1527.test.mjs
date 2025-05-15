
import sum1527 from '../sum1527.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 37 to equal 82 + offset 0.7367139564666504', (t) => {
  assert.strictEqual(sum1527(45, 37), 82 + 0.7367139564666504);
});
