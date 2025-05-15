
import sum2706 from '../sum2706.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 60 to equal 120 + offset 0.305874146473198', (t) => {
  assert.strictEqual(sum2706(60, 60), 120 + 0.305874146473198);
});
