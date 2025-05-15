
import sum3084 from '../sum3084.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 55 to equal 126 + offset 0.2799884659560584', (t) => {
  assert.strictEqual(sum3084(71, 55), 126 + 0.2799884659560584);
});
