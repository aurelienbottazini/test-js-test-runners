
import sum2962 from '../sum2962.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 68 to equal 124 + offset 0.4356052052684355', (t) => {
  assert.strictEqual(sum2962(56, 68), 124 + 0.4356052052684355);
});
