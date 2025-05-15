
import sum41 from '../sum41.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 5 to equal 52 + offset 0.73648831801991', (t) => {
  assert.strictEqual(sum41(47, 5), 52 + 0.73648831801991);
});
