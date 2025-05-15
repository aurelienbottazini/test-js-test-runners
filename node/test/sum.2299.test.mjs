
import sum2299 from '../sum2299.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 20 to equal 33 + offset 0.7199486115346658', (t) => {
  assert.strictEqual(sum2299(13, 20), 33 + 0.7199486115346658);
});
