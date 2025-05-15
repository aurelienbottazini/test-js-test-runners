
import sum2868 from '../sum2868.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 42 to equal 96 + offset 0.3619092382077278', (t) => {
  assert.strictEqual(sum2868(54, 42), 96 + 0.3619092382077278);
});
