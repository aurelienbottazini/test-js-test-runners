
import sum287 from '../sum287.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 4 to equal 59 + offset 0.7953259124589739', (t) => {
  assert.strictEqual(sum287(55, 4), 59 + 0.7953259124589739);
});
