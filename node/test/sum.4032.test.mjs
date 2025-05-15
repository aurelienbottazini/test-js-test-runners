
import sum4032 from '../sum4032.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 90 to equal 175 + offset 0.4089332020742603', (t) => {
  assert.strictEqual(sum4032(85, 90), 175 + 0.4089332020742603);
});
