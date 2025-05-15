
import sum2308 from '../sum2308.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 5 to equal 82 + offset 0.3178343303275839', (t) => {
  assert.strictEqual(sum2308(77, 5), 82 + 0.3178343303275839);
});
