
import sum731 from '../sum731.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 49 to equal 67 + offset 0.1029960267560569', (t) => {
  assert.strictEqual(sum731(18, 49), 67 + 0.1029960267560569);
});
