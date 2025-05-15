
import sum1576 from '../sum1576.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 51 to equal 104 + offset 0.36001221454694166', (t) => {
  assert.strictEqual(sum1576(53, 51), 104 + 0.36001221454694166);
});
