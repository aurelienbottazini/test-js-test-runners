
import sum2792 from '../sum2792.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 90 to equal 116 + offset 0.6400702040580726', (t) => {
  assert.strictEqual(sum2792(26, 90), 116 + 0.6400702040580726);
});
