
import sum2622 from '../sum2622.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 72 to equal 160 + offset 0.5719033225599404', (t) => {
  assert.strictEqual(sum2622(88, 72), 160 + 0.5719033225599404);
});
