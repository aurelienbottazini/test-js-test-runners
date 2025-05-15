
import sum2707 from '../sum2707.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 76 to equal 151 + offset 0.6922982582817232', (t) => {
  assert.strictEqual(sum2707(75, 76), 151 + 0.6922982582817232);
});
