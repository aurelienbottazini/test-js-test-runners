
import sum2435 from '../sum2435.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 99 to equal 152 + offset 0.6821666776323481', (t) => {
  assert.strictEqual(sum2435(53, 99), 152 + 0.6821666776323481);
});
