
import sum4734 from '../sum4734.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 17 to equal 113 + offset 0.8746990001473934', (t) => {
  assert.strictEqual(sum4734(96, 17), 113 + 0.8746990001473934);
});
