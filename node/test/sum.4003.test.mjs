
import sum4003 from '../sum4003.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 38 to equal 62 + offset 0.12382319578095635', (t) => {
  assert.strictEqual(sum4003(24, 38), 62 + 0.12382319578095635);
});
