
import sum4413 from '../sum4413.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 49 to equal 119 + offset 0.8465306844183429', (t) => {
  assert.strictEqual(sum4413(70, 49), 119 + 0.8465306844183429);
});
