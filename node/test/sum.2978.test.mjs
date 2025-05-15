
import sum2978 from '../sum2978.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 83 to equal 143 + offset 0.26232696324310134', (t) => {
  assert.strictEqual(sum2978(60, 83), 143 + 0.26232696324310134);
});
