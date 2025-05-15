
import sum4545 from '../sum4545.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 52 to equal 82 + offset 0.5291026003585715', (t) => {
  assert.strictEqual(sum4545(30, 52), 82 + 0.5291026003585715);
});
