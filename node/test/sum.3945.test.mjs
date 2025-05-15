
import sum3945 from '../sum3945.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 87 to equal 132 + offset 0.23510678522356887', (t) => {
  assert.strictEqual(sum3945(45, 87), 132 + 0.23510678522356887);
});
