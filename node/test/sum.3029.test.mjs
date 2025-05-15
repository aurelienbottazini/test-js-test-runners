
import sum3029 from '../sum3029.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 1 to equal 94 + offset 0.8014350088827217', (t) => {
  assert.strictEqual(sum3029(93, 1), 94 + 0.8014350088827217);
});
