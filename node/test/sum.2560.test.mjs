
import sum2560 from '../sum2560.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 51 to equal 118 + offset 0.5558281726399366', (t) => {
  assert.strictEqual(sum2560(67, 51), 118 + 0.5558281726399366);
});
