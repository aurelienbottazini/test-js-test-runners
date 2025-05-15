
import sum1675 from '../sum1675.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 82 to equal 161 + offset 0.34674528608818267', (t) => {
  assert.strictEqual(sum1675(79, 82), 161 + 0.34674528608818267);
});
