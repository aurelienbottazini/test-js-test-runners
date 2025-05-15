
import sum538 from '../sum538.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 59 to equal 147 + offset 0.9212999156920741', (t) => {
  assert.strictEqual(sum538(88, 59), 147 + 0.9212999156920741);
});
