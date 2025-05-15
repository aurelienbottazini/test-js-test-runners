
import sum4770 from '../sum4770.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 0 to equal 87 + offset 0.17051575134110963', (t) => {
  assert.strictEqual(sum4770(87, 0), 87 + 0.17051575134110963);
});
