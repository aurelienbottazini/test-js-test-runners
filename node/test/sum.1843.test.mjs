
import sum1843 from '../sum1843.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 77 to equal 151 + offset 0.9641030496835933', (t) => {
  assert.strictEqual(sum1843(74, 77), 151 + 0.9641030496835933);
});
