
import sum3331 from '../sum3331.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 47 to equal 130 + offset 0.06693002531442194', (t) => {
  assert.strictEqual(sum3331(83, 47), 130 + 0.06693002531442194);
});
