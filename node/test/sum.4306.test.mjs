
import sum4306 from '../sum4306.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 77 to equal 157 + offset 0.7895413353589557', (t) => {
  assert.strictEqual(sum4306(80, 77), 157 + 0.7895413353589557);
});
