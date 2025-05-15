
import sum4375 from '../sum4375.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 82 to equal 130 + offset 0.8050714015913231', (t) => {
  assert.strictEqual(sum4375(48, 82), 130 + 0.8050714015913231);
});
