
import sum3339 from '../sum3339.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 95 to equal 186 + offset 0.43339007420084086', (t) => {
  assert.strictEqual(sum3339(91, 95), 186 + 0.43339007420084086);
});
