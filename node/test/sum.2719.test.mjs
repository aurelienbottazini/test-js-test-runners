
import sum2719 from '../sum2719.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 9 to equal 69 + offset 0.44379091220976175', (t) => {
  assert.strictEqual(sum2719(60, 9), 69 + 0.44379091220976175);
});
