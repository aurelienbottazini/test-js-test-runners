
import sum4182 from '../sum4182.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 64 to equal 148 + offset 0.8251553333836804', (t) => {
  assert.strictEqual(sum4182(84, 64), 148 + 0.8251553333836804);
});
