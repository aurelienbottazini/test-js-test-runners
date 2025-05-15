
import sum4046 from '../sum4046.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 82 to equal 177 + offset 0.20469153812090768', (t) => {
  assert.strictEqual(sum4046(95, 82), 177 + 0.20469153812090768);
});
