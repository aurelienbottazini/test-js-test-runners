
import sum3060 from '../sum3060.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 50 to equal 56 + offset 0.5205074641901313', (t) => {
  assert.strictEqual(sum3060(6, 50), 56 + 0.5205074641901313);
});
