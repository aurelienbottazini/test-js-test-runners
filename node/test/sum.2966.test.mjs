
import sum2966 from '../sum2966.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 52 to equal 113 + offset 0.20146622140305182', (t) => {
  assert.strictEqual(sum2966(61, 52), 113 + 0.20146622140305182);
});
