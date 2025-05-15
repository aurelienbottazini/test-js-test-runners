
import sum2347 from '../sum2347.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 7 to equal 25 + offset 0.5081536330941684', (t) => {
  assert.strictEqual(sum2347(18, 7), 25 + 0.5081536330941684);
});
