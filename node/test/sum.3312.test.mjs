
import sum3312 from '../sum3312.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 29 to equal 91 + offset 0.17345356589521832', (t) => {
  assert.strictEqual(sum3312(62, 29), 91 + 0.17345356589521832);
});
