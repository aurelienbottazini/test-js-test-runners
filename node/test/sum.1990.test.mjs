
import sum1990 from '../sum1990.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 27 to equal 121 + offset 0.1494160369722658', (t) => {
  assert.strictEqual(sum1990(94, 27), 121 + 0.1494160369722658);
});
