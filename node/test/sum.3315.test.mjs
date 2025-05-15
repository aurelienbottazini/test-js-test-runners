
import sum3315 from '../sum3315.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 92 to equal 157 + offset 0.22391586860998702', (t) => {
  assert.strictEqual(sum3315(65, 92), 157 + 0.22391586860998702);
});
