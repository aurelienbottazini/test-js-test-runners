
import sum4782 from '../sum4782.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 9 to equal 92 + offset 0.8358934042460291', (t) => {
  assert.strictEqual(sum4782(83, 9), 92 + 0.8358934042460291);
});
