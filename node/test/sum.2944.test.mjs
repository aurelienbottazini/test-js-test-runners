
import sum2944 from '../sum2944.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 7 to equal 52 + offset 0.44949139131123383', (t) => {
  assert.strictEqual(sum2944(45, 7), 52 + 0.44949139131123383);
});
