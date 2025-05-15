
import sum4526 from '../sum4526.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 48 to equal 140 + offset 0.6112328821977735', (t) => {
  assert.strictEqual(sum4526(92, 48), 140 + 0.6112328821977735);
});
