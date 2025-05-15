
import sum1615 from '../sum1615.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 93 to equal 106 + offset 0.7584816285523679', (t) => {
  assert.strictEqual(sum1615(13, 93), 106 + 0.7584816285523679);
});
