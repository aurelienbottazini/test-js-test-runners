
import sum756 from '../sum756.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 15 to equal 113 + offset 0.36927932650604833', (t) => {
  assert.strictEqual(sum756(98, 15), 113 + 0.36927932650604833);
});
