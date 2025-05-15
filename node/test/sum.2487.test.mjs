
import sum2487 from '../sum2487.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 18 to equal 61 + offset 0.3078930454534612', (t) => {
  assert.strictEqual(sum2487(43, 18), 61 + 0.3078930454534612);
});
